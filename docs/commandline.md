# command line
## introduction
- purpose: learn basic command line skills for file manipulation and navigation
- prerequisites: a terminal application
## opening the terminal
- terminal on mac
- powerhsell on windows
- application menu on linux
## basic navigation commands
- pwd - print working directory - displays current directory path
- ls - list directory contents - lists files and directories in the current direcotry
-- ls -l  - long format listing
-- ls -a - includes hidden files
- cd - change directory - changes the current directory to the specified one (cd by itself changes to home)
-- cd Documents - goes to documenets
-- cd .. - moves up one directory (can be followed by path)
-- cd . - searches same directory (folliowed by path)
## creating and managing files
- creating a new directory
-- mkdir <directory>
-- mkdir myfolder
- creating a new file
-- touch <file>
-- touch myfile.txt
- editing a file
-- nano <file>
-- nano commandline.md
-- type some text, save and exit with CTRL + X, confirm with Y
- copying a file
-- cp <file> <destination>
-- cp myfile.txt myfilecopy.txt
- moving/renaming a file
-- mv <file> <destination>
-- mv myfilecopy.txt mynewfile.txt
- deleting a file
-- rm <file>
-- rm mynewfile.txt
## viewing file contents
- cat - concatenate and display file content
-- cat <file>
-- cat myfile.txt
- less - view file content page by page
-- less <file>
-- less myfile.txt
-- use q to quit
## getting help
- man - manual pages
-- man <command>
-- man ls
- use arrow keys to scroll, q to quit
## conclusion and practice
- recap
-- navigate directories
-- create/manage files
-- view contents
-- access help
- practice
-- encourage trying out commands in different comnbinations to build confidence
- additional resources
-- online tutorials - codeacademy, freecodecamp
-- official documentation for more advanced commands
