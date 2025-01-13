---
title: "Plazza: Pizzeria Simulation"
description: "A C++ project simulating a multi-kitchen pizzeria, focusing on process management and synchronization."
pubDate: 'May 15 2023'
heroImage: "../img/plazza.webp"
---

## Plazza: Pizzeria Simulation

<div style="margin-bottom: 50px;">
  <img src="/img/plazza.webp" alt="Weather App Image">
</div>


This project demonstrates my development of a complete **pizzeria simulation** that manages multiple orders, kitchens, and cooks working in parallel. Through this work, I explored advanced topics in process management, thread synchronization, and inter-process communication.

### Project Overview

The goal was to simulate the workflow of a pizzeria, which includes:

\. A **reception** that accepts and manages incoming orders.

\. Several **kitchens**, each operating as an independent process.

\. Cooks, represented as threads, preparing multiple pizzas simultaneously.
<br><br>
This project allowed me to enhance my skills in:

\. Balancing loads efficiently between processes.

\. Synchronizing threads and processes.

\. Enabling effective communication between processes and threads.
<br><br><br>

### Project Features

1\. **Programming Language**: Fully developed in **C++**.<br><br>
2\. **Compilation**: Built using a `Makefile` with the following rules:<br>
&nbsp;&nbsp;\- `re`: To recompile the project.<br>
&nbsp;&nbsp;\- `clean`: To remove object files.<br>
&nbsp;&nbsp;\- `fclean`: To clean all build artifacts.<br><br>
3\. **Binary Name**: The final executable is named `plazza`.

### Technical Details

1\. **Order Reception**:<br>
&nbsp;&nbsp;\- Acts as the central hub for managing incoming orders.<br>
&nbsp;&nbsp;\- Distributes commands to kitchens based on their workload.<br><br>

2. **Kitchen Management**:<br>
&nbsp;&nbsp;\- Each kitchen is an independent process managing multiple cooks.<br>
&nbsp;&nbsp;\- Resource usage (e.g., oven capacity) is optimized to prevent bottlenecks.<br><br>

3. **Cook Threads**:<br>
&nbsp;&nbsp;\- Each cook is a thread responsible for preparing a pizza.<br>
&nbsp;&nbsp;\- Threads share resources safely using proper synchronization mechanisms.<br><br>

4. **Inter-Process Communication (IPC)**:<br>
&nbsp;&nbsp;\- Implemented IPC mechanisms such as pipes, message queues, and shared memory for efficient communication between the reception and kitchens.<br> <br>

### Challenges Addressed

\- **Process Synchronization**:<br>
&nbsp;&nbsp;Ensuring seamless coordination between the reception and kitchens. <br><br>

\- **Thread Safety**:<br>
&nbsp;&nbsp;Preventing race conditions and ensuring secure access to shared resources.<br><br>

### Key Learnings

\- Implementing and managing **processes** using tools like `fork` and `wait`.<br>
\- Leveraging **POSIX threads (pthread)** for advanced thread management.<br>
\- Building **inter-process communication** solutions to enable data exchange between processes.<br>
\- Enhancing performance through dynamic **load balancing**.<br><br>

### Results

This project demonstrates my expertise in system programming, process management, and developing high-performance, synchronized applications. The simulation efficiently handles task distribution across kitchens and processes orders seamlessly.

### Conclusion

The **Plazza** project was an enriching experience, addressing complex challenges in process management and thread synchronization. It highlights my ability to develop technical solutions and optimize workflows. This project is a key addition to my portfolio as a demonstration of advanced software engineering skills.