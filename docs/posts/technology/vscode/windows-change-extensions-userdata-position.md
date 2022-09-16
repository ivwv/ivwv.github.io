---
title: VSCode修改扩展和用户文件夹目录位置(Windows)
description: VSCode修改扩展和用户文件夹目录位置(Windows)  Windows修改extensions扩展目录以及user-data用户文件夹目录位置，减少C盘压力
isOriginal: true
icon: vue
date: 2022-09-16
category:
  - 技术文章
  - VSCode
tag:
  - vscode
  - 注册表
# 是否置顶
sticky: false
# 是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前
star: false
# 是否将该文章添加至文章列表中。
article: true
# 是否将该文章添加至时间线中。
timeline: true
---
<CountView></CountView>


> Windows修改extensions扩展目录以及user-data用户文件夹目录位置，减少C盘压力


<!-- more -->



`vscode`的扩展和用户数据都是默认在C盘下的

> `extensions `:`C:\Users\.vscode\extensions`
>
> `user-data`:`C:\Users\AppData\Roaming\Code`

一般来说，用户文件夹大小会比扩展目录的大小会大，就我而言，我的扩展有`1-1.5GB`的大小，而用户文件夹却占了我`5GB`容量，这对`C`盘容量严重不足的用户是非常难受的

所以，修改这两个文件夹的目录位置以及刻不容缓

## `VSCode`便携版(不推荐)


[官方有一个`zip`版本的`VSCode`](https://code.visualstudio.com/docs/editor/portable)


当我们解压完毕后:

1. 在当前`VSCode`目录下新建一个`data`文件夹
2. 点击`Code.exe`启动，启动完毕后关闭
3. 进入当前的`data`目录，可以发现有扩展目录，以及用户文件夹
   - ![image-20220916153810529](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-09-16-15:38:10*image-20220916153810529*b.png)
4. 然后我们只需要将`C:\Users\.vscode\extensions`目录下的所有扩展文件夹全选复制到`extensions`目录中，以及将`C:\Users\AppData\Roaming\Code`文件夹内的所有文件全选复制到`user-data`目录内，再次打开`Code.exe`程序，就可以发现根以前的`VSCode`一模一样的配置以及扩展

### 缺点

但是我当时遇到的问题是当文件右键，或者文件夹右键时，不能通过`VSCode`打开文件，此时需要打开注册表，修改通过`VSCode`打开的程序位置。

同时也发现了一个弊端，就是需要管理员权限的文件夹打不开，也写不进去，可以通过将`Code.exe`程序`右键->属性->兼容性->以管理员身份运行此程序->应用`。但经过这操作后，我发现的问题是`VSCode`窗口的工作空间不能将文件拖进去。上网一搜发现，只需要将`Code.exe`的以管理员身份运行此程序取消勾选,那这不就跟我预期的冲突了嘛:flushed::flushed:

后来想到了还是使用安装版的，想办法将两个大文件目录位置修改一下

## `VSCode`安装版(推荐)


[安装版网址](https://code.visualstudio.com/#alt-downloads)


选择 **System Installer** 再根据自己的系统选择，下面的`.zip`就是上面说的便携版

要修改两个文件夹的位置，就需要使用官方的[高级 CLI 选项](https://code.visualstudio.com/docs/editor/command-line#_advanced-cli-options)了

有两个选项我们可以用得上:`--extensions-dir <dir>` 和`--user-data-dir <dir>`,但这些命令对于便携版是不能生效的

可以将这两个选项添加到`VSCode`的快捷方式后面

- `右键VSCode快捷方式->快捷方式->目标->` 在后面添加空格再加上` --extensions-dir "D:\.vscode\extensions" --user-data-dir "D:\.vscode\user-data"`自行替换目录位置

- 我的设置:arrow_down:

  - ```
    "D:\.Software\Microsoft VS Code\Code.exe" --extensions-dir "D:\.vscode\extensions" --extensions-dir "D:\.vscode\extensions" --user-data-dir "D:\.vscode\user-data"
    ```

![image-20220916162039693](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-09-16-16:20:40*image-20220916162039693*4.png)

**但是就这样修改不能保证文件右键通过Code打开会使用指定的 扩展文件夹以及用户文件夹**

接下来需要修改注册表的主要`VSCode`打开方式修改

- 对选中文件右键点击弹出的菜单
- 对选择目录右键点击弹出的菜单
- 在目录空白处右键点击弹出的菜单
- 对磁盘分区右键点击弹出的菜单

相对应的注册表位置为

```
计算机\HKEY_CLASSES_ROOT\*\shell\VSCode\command
计算机\HKEY_CLASSES_ROOT\Directory\shell\VSCode\command
计算机\HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command
计算机\HKEY_CLASSES_ROOT\Drive\shell\VSCode\command
```

>  **注册表打开:**`Win+r->输入:Regedit->回车`

找到这些注册表项，在` Code.exe` 后添加同快捷方式一样的参数内容：

```
--extensions-dir "D:\.vscode\extensions" --user-data-dir "D:\.vscode\user-data"
```

**例如:**

```
"D:\.Software\Microsoft VS Code\Code.exe" --extensions-dir "D:\.vscode\extensions"  --user-data-dir "D:\.vscode\user-data" "%1"
```

![image-20220916162649864](https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/typora-user-images/2022-09-16-16:26:50*image-20220916162649864*d.png)

**将四个注册表位置的数值数据一一添加即可，当然主要的是这四个位置，还有一些其他的文件打开可以执行添加**