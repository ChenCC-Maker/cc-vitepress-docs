# 重新认识maven
:::tip
maven作为java项目中，重要的构成部分，java工程包管理与构建的组件，之前的工作当中总是一知半解，希望通过这次专题学习，能够解决之前模棱两可认知困惑
:::

## maven到底解决了一个什么样的问题
+ java程序需要编程为.class文件才能在JVM中运行，一个正常的项目，不单单是我们单纯的业务代码能够完成的，一个项目通常需要引入大量的第三方依赖，而我们的项目想要正常的运行，那么久必须将依赖的包也放入classpath下，JVM的classloader才能正常的加载它们。而maven便帮助我们完美的去完成了这个事情。所以我们称它为包管理与构建工具。

## maven pom.xml配置
+ 通过我们通过在pom文件当中显性的引入某个依赖，通过groupId、artifactId、version我们便可以唯一确定某个依赖，也将这三个参数叫做依赖坐标；
+ packaging
    + 默认参数值为jar；
    + war war包通常运用场景属于javaweb项目中，需要通过tomcat进行部署；
    + pom 用于聚合多个子模块的父级模块pom.xml文件的packaging参数定义为pom，只用于模块的管理；
    + ear maven-plugin这两个参数不过多关注，一般用不上；
    + 所有父级模块都为pom，子模块为jar或者war；若只是作为内部服务调用或者微服务打成jar即可。
+ dependencyManagement
    + 通常在父模块中使用，用于统一管理依赖的版本，保证依赖一致性，但是若子模块需要使用某个依赖，还是需要在子模块中引入，只是不需要指定version。
+ exclusions
    + 排除掉我们不需要的传递依赖
    ``` xml
    <dependencies>
        <dependency>
            <groupId>com.ccc</groupId>
            <artifactId>common-json</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>com.ccc</groupId>
                    <artifactId>xxx-component</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
    ```
+ maven的生命周期（`内置default、clean、site三个生命周期`）

    + 每个生命周期下有多个阶段，maven将这些阶段抽象为了一个个的插件（`plugin`）供我们调用。
    + mmaven-clean-plugin与maven-compire-plugin是我们常用的两个插件，若我们有自定义插件能力的需求，比如在编译的时候跳过单元测试，那么需要用到
    ``` xml
    <build>
        <plugins>
            <plugin>


            </plugin>
        </plugins>
    </build>
    ```

+ 依赖获取配置
    
    + 实际开发中，并不是所有的依赖都存放于中央仓库，有一部分依赖存放于公司的私库当中，这种情况下，需要我们在setting.xml文件当中配置私库的连接信息；