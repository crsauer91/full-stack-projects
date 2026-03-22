# git add, commit, push review
## git add
### purpose
stage changes in the working directory for the next commit. it prepares your changes to be included in version history
### usage
- git add <file> stages a specific file
- git add . stages all changes in the current directory
- git add -A stages all changes, including deletions
### key points
- staging allows you to control what changes will be included in the next commit
- you can stage changes selectively, which is useful for organizing commits logically
## git commit
### purpose
save staged changes to the repository's history - represents a snapshot of your project at a specific point in time
### usage
- git commit -m "message goes here" - commits the staged changes with message
- git commit -a -m "message goes here" - automatically stages all tracked files before committing
### key points
- writing clear and concise commit messages is crucial for maintaining a readable project history
- commits should be atomic, meaning they should encompass a single logical change
## git push
### purpose
used to upload local repo content to remote repo. tranfers commits and updates remote branch.
### usage
- git push origin <branch> - pushes changes to the specified branch on the remote named origin
- git push - pushes changes to the default remote and branch
### key points
- pushing is essential for collaboration, as it allows others to access your changes
- ensure your local branch is up to date with the remote branch to avoid conflicts
