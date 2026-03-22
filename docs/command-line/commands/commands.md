# commands
## cat
- cat <file> - concatenate and display contents of file
## cd
- cd /path/to/directory - change to the specified directory
- cd .. - move up one directory level
- cd . - same directory level
- cd ~ - home directory
- cd - - previous directory
- cd - can specify absolute path as above or relative as cd ../ to go up one directory
- cd -  without arguments goes to home directory
## cp
- cp <source> <destination> - copy files
## echo
- echo "<context>" > <file> - writes context into file
## find
- find <directory> -name <name> - search for files by name
## less
- less <file> - paginated viewing
    - q to quit
## ls
- ls - list files and directories in directory
    - -a - show hidden files
    - -l - detailed list (perms, owner, size, etc)
## man
- man <command> - reads manual for any command
    - q to quit
    - arrow keys to neviagte
## mkdir
- mkdir <name> - create a new directory
## mv
- mv <source> <destination> - move/rename files
## nano
- nano <name>
    - if file does not exist, creates a file with that name in a text editor
    - if file does exist, opens that file in a text editor
    - CTRL + X to quit, Y to proceed
## pwd
- pwd - print working directory - view current directory
## rm
- rm <name> - remove file
- rm -r <name> - remove directory and its contents
## rmdir
- rmdir <name> - remove an empty directory
## touch
- touch <file> - create empty file (if new), update timestamp (existing)
    - touch -a <file> - update the access time
    - touch -d "<YYYY-MM-DD HH:MM:SS>" <file> - set specific date and time