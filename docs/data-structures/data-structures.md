# data structures
## What is a data structure?
- A data structure is a way of formatting data so that it can be used by a computer program or other system. Data structures are a fundamental component of computer science because they give form to abstract data points. In this way, they allow users and systems to efficiently organize, work with and store data.
- Data structures combine primitive data types such as numbers, characters, booleans and integers into a cohesive format. Alone, each of these primitive data types possesses only a single value. When they are combined in a data structure, they enable higher-level data operations such as sorting, searching, insertion and deletion.
- For example, consider a sales team that wants to track daily sales figures. Instead of logging each data point separately, the team could store this data in a type of data structure called an “array.” (For more information, see “Types of data structures”).
- In Python, the array might look like this:
    - daily_sales = [500, 800, 600, 1200, 950]
- Using an array enables the team to keep all this data together, easily retrieve data points when needed and perform functions on both individual elements and the whole array.
- Computer programmers rely on data structures to build effective applications. In the fields of computer science and data science, data structures are essential to operating systems, databases, websites, graphics, analytics, blockchain, machine learning (ML) applications and more.
- Because data structures are fundamental to writing effective code, they are often among the first lessons taught to beginners of programming. They are also a common topic of interview questions for computer programming job candidates.
## Why are data structures important?
- Data structures are important because they make it easier for computers to process large, complex sets of information. By logically organizing data elements, data structures increase the efficiency of computer code and make the code simpler to understand.
### Data structures and algorithms (DSA)
- Programmers use data structures to improve the speed and strength of algorithms, which are sets of instructions for completing a computing task. In computer programming, this combination is known as "DSA" for "data structures and algorithms." DSA helps programmers address the twin challenges of time complexity and space complexity.
- Time complexity is a measure of how long an algorithm takes to complete a task based on the amount of input. Space complexity is a measure of how much memory the algorithm uses based on the amount of input.
- Using the mathematical metric Big O notation, programmers can measure space and time complexity. They can then determine which data structures and algorithms provide the fastest runtime and most space efficiency for a specific task.
### Dynamic programming
- Data structures also play an important role in dynamic programming, a technique for quickly solving complex problems.
- Dynamic programming uses recursion to separate a problem into smaller components. Then, the program finds solutions for those components and reassembles the sub-solutions into a complete solution to the original problem.
- Data structures enable dynamic programming by giving the program a way to store and retrieve each sub-solution, and by keeping data elements logically organized during the process.
- For example, calculated values can be kept in an array. Instead of recalculating these values when it is time to formulate the complete solution, the program can retrieve them from the array.
- With these capabilities, programmers can save time and solve problems more efficiently.
## Linear vs. nonlinear data structures
- Data structures are divided into 2 main categories: linear and nonlinear.
### Linear data structures
- In a linear data structure, data is arranged in a line, with each data element placed one after the other in sequence. This arrangement makes it simple to traverse and access the elements in order.
- Linear data structures are considered straightforward and simple to implement. Common data structures in this category include arrays, linked lists and queues.
### Nonlinear data structures
- In a nonlinear data structure, the organizational logic is something other than a linear, sequential arrangement. For example, data points can be hierarchically ordered or connected in a network.
- Because they are not connected to each other in a single line, the elements in a nonlinear structure cannot all be traversed and accessed in a single run, as they can in a linear data structure. Examples of nonlinear data structures include trees and graphs.
## Types of data structures
- There are several types of data structures that programmers might use depending on the systems they are building and what they need to do with the data. Common data structures include:
    - Arrays
    - Queues
    - Stacks
    - Linked lists
    - Trees
    - Graphs
    - Hash 
### Arrays
- Arrays are one of the most basic and widely used types of data structures. They store data items of a similar type at adjacent memory locations. This structure enables items of the same type to be easily located and accessed.
- Uses: Common uses for arrays include sorting, storing, searching and accessing data. Arrays can also be used as a foundation for implementing other data structures, such as queues and stacks.
- Example: An array of a call center’s average customer satisfaction scores each day might look like this:
    - average_customer_score = [4, 3.5, 3.7, 4.1, 3.4, 4.9]
### Queues
- A queue data structure performs data operations in a predetermined order called “FIFO” for “first in, first out.” This means that the first data item to be added will be the first to be removed. Programmers often use this data structure to create priority queues, which are similar to waiting lists.
- Uses: Queue data structures can be used to determine the next song in a playlist, the next user to have access to a shared printer or the next call to be answered in a call center.
- Example: Customers waiting to speak to a call center representative might be placed in a queue like this:
    - queue = [customer 1, customer 2, customer 3]
- When a representative is available, they automatically connect with the first customer in the queue, who is then removed from the list. Now, the queue looks like this:
    - queue = [customer 2, customer 3]
### Stacks
- Similar to queues, a stack data structure performs data operations in a predetermined order. However, instead of FIFO, stacks use the “LIFO” format, which stands for “last in, first out.” The last data item to be added will be the first to be removed.
- Uses: Stacks can be used to help ensure the correct opening and closing of brackets or tags in computer codes, track recent browser history or undo recent operations in an application.
- Example: Many apps use stacks to keep track of user actions so they can easily be undone. For example, a text editor might keep a stack that looks like this:
    - recent_actions = [typing ‘.’, space, typing ‘T’]
- When a user hits the “undo” button, the most recent action in the stack—“typing ‘T’”—is undone. Now, the stack looks like this:
    - recent_actions = [typing ‘.’, space]
### Linked lists
- Linked lists store data items in a linear order, with each item connected to the next item in the list. This structure makes it easy to insert new items or delete existing items without having to shift the entire collection of data.
- Uses: Linked lists are often used for frequent insertions and deletions in scenarios, such as web browser histories, media player playlists and undo or redo operations in applications.
- Example: A simplified version of a linked list of videos in a media player might look something like this:
    - Video 1 – Video 2 – Video 3
- Each object in the list points to the next, so when Video 1 is over, it will direct the media player to start Video 2. 
### Trees
- A tree data structure, sometimes called a prefix tree, is useful for establishing hierarchical relationships among data elements. A single parent node sits on the top of the tree structure, with child subnodes branching out on subsequent levels beneath it.
- Different classes of trees, such as binary search trees, AVL trees and b-trees, have different properties and support different functions. For example, in a binary search tree, each node has at most 2 children. This structure helps support fast searches of data sets. 
- Uses: Trees are often used to represent hierarchies in organizational maps, file systems, domain name systems, database indexing and decision trees in machine learning applications.
### Graphs
- A graph data structure organizes the relationships between different objects by using vertices and edges. Vertices are data points "represented" by dots, and edges are lines that connect the vertices.
- For example, on a map, the cities would be vertices and the roads that connect them would be edges. On Facebook, users would be vertices and the friendships that connect them would be edges.
- Uses: Graph data structures are often used with search algorithms that seek out data within complex webs of relationships. Common examples include breadth-first searches, which search through data level by level, and depth-first searches, which drill down through multiple levels of data to find information.
### Hash
- A hash data structure, sometimes called a "hash table" or "hash map", uses a hash function to store data values. The hash function creates a hash, which is a unique digital key that corresponds to the location of a specific data value in memory.
- The hash table contains a searchable index of every hash and data value pair, which makes it quick and easy to access, add and remove data from the table.
- Uses: Hash data structures can help quickly retrieve data from phonebooks, dictionaries and personnel directories. They can also be used to index databases, store passwords and load balance IT systems.
- The hash function maps each key to the appropriate index. So, when a user enters a key (a contact's name), the hash table returns the associated value at the same index (the contact's number).
## Use cases for data structures
- Data structures are critical in designing software applications because they implement the concrete forms of abstract data types.
- An abstract data type is a mathematical model that classifies how a data type behaves and the operations that can be performed on it. For example, the abstract data type of a queue defines the queue’s behavior (following the principle of FIFO). The queue data structure provides a way to format data into a queue, such that a computer program applies the FIFO principle to that data.
- Many programming languages, such as Python, Java and JavaScript, include built-in data structures to help developers work more efficiently.
- Common use cases for data structures in computer programs include:
    - Data storage and organization
    - Indexing
    - Data exchange
    - Searching
    - Scalability
    - AI Academy
### Data storage and organization
- Data structures can store data logically and efficiently with high levels of data persistence, so data remains easily accessible from databases and other applications. Data structures can also provide a logical organization for large amounts of data so it can be more easily sorted, ordered and processed.
- For example, a website can use linked lists to store user activity logs. The lists can record events in chronological order, and links between events can help paint a full picture of what a user does throughout each session.  
### Indexing
- Data structures can index information by mapping data values to corresponding data items in a database, making it easier to locate and access those data records.
- For example, an e-commerce website can use a hash table to index products in categories. When a user wants to view just one category, the website can use the hash value to quickly retrieve all related products instead of searching through the database of every single product.
### Data exchange
- Data structures organize data so it can be easily shared between applications. For example, many apps use queues to manage and send packets over protocols such as TCP/IP. Queues help ensure that packets are sent and received in the order they’re created. 
### Searching
- By organizing data so that it is simpler for applications and end users to understand, data structures make it easier to search for and locate data.
- For example, graph data structures can make it easier for users to find people they know on social media sites. Graph data structures record relationships between vertices or nodes. Search algorithms can follow connections from node to node to efficiently locate related users.
### Scalability
- Data structures support system scalability by helping computer programs process large data sets, solve complex problems and use resources more efficiently.
- For example, both hash tables and tree structures can make it easier to locate relevant information in large data sets. Instead of inspecting every element, systems only need to use the right key or follow the right path through the tree. This helps keep performance high because the system does not need to use many resources to search through massive amounts of data.