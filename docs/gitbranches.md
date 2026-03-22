# git branches
The way Git branches is incredibly lightweight, making branching operations nearly instantaneous, and switching back and forth between branches generally just as fast. Unlike many other VCSs, Git encourages workflows that branch and merge often, even multiple times in a day.
## Branches in a Nutshell
- Git stores data as a series of snapshots.
- When you make a commit, Git stores a commit object that contains a pointer to the snapshot of the content you staged. 
    - This object also contains the author’s name and email address, the message that you typed, and pointers to the commit or commits that directly came before this commit (its parent or parents):
        - Zero parents for the initial commit
        - One parent for a normal commit
        - Multiple parents for a commit that results from a merge of two or more branches. 
- Staging the files computes a checksum for each one, stores that version of the file in the Git repository (Git refers to them as blobs), and adds that checksum to the staging area.
- When you create the commit by running git commit, Git checksums each subdirectory and stores them as a tree object in the Git repository. 
- Git then creates a commit object that has the metadata and a pointer to the root project tree so it can re-create that snapshot when needed. 
- A branch in Git is simply a lightweight movable pointer to one of these commits. 
    - The default branch name in Git is master. 
    - Master branch points to the last commit you made. 
    - Every time you commit, the master branch pointer moves forward automatically. 
    - The “master” branch in Git is not a special branch.
## Creating a New Branch
- git branch <name> creates a new pointer to the same commit you’re currently on.
- How does Git know what branch you’re currently on? It keeps a special pointer called HEAD.
    - pointer to the local branch you’re currently on. 
- The git branch command only created a new branch — it didn’t switch to that branch. 
- git log --oneline --decorate shows where branches are pointing to
## Switching Branches
- git checkout <name> moves HEAD to point to the named branch. 
    - by default, git log shows history below the branch you’ve checked out. 
        - To show commit history for a specific branch: git log <name>. 
        - git log -all shows all branches
- Switching branches changes files in your working directory 
    - If you switch to an older branch, your working directory will be reverted to look like it did the last time you committed on that branch. 
    - If Git cannot do it cleanly, it will not let you switch at all.
- If you run git log --oneline --decorate --graph --all it will print out the history of your commits, showing where your branch pointers are and how your history has diverged. 
- because we’re recording the parents when we commit, finding a proper merge base for merging is automatically done for us and is generally very easy to do. 
- Creating a new branch and switching to it at the same time - git checkout -b <nname>. 
- you can use git switch instead of git checkout to: 
    - Switch to an existing branch: git switch testing-branch. 
    - Create a new branch and switch to it: git switch -c new-branch. 
        - The -c flag stands for create, you can also use the full flag: --create. 
    - Return to your previously checked out branch: git switch -.