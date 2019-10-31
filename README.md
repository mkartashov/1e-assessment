# 1E UX/UI Assessment
This repository contains all the instructions and boilerplate code for the development of the assessment for the UI/UX developer/designer position at 1E.

1. [ Introduction. ](#intro)
2. [ Boilerplate Code. ](#boilerplate)
3. [ Evaluation. ](#evaluation)

<a name="intro"></a>
## 1. Introduction
The goal of this assessment is to evaluate the skills of the candidate on the creation of interactive prototypes (using a fixed list of provided libraries and frameworks) in order to solve certain use cases based on a list of requirements.

<a name="boilerplate"></a>
## 2. Boilerplate Code
The assessment has to be developed using this repository as boilerplate code. The dependencies included in this project are:
* **NPM** as a dependency manager.
* **Webpack** as a module bundler.
* **Stylus** as a CSS pre-processor.
* **BabelJS** as a JavaScript transpiler.
* **React** as a UI library.

The candidate can feel free to replace, include, exclude or upgrade any dependencies as far as the project is written in **ES6** and **React**.

<a name="requirements"></a>
## 3. Use Case
The candidate is asked to design a UI for a **Security Administrator** persona. This user is responsible for managing the access rights of the users of the system to the different applications of the platform:
* The **Platform** is formed by multiple applications called **Consumers** (C).
* Each **Consumer** has a list of **Permissions** assigned.
* One or multiple **Permissions** on a **Consumer** can be assigned to a **Role**.
* Each **User** can be part of one or multiple **Roles**.
* Each **Role** can group one or multiple **Users**.


User <==> Role <==> Permission <==> Consumer

<a name="evaluation"></a>
## 3. Evaluation
* Organisation and modularity of the code.
* UX design solving the use cases provided for the given persona.
* UI design according to design guidelines, matching the given examples as much as possible.
* Size of the final bundle (additional dependencies included in the bundle).
* ES6 and React usage skills.

Any instructions or comments about the implementation have to be included in this **README.md** file.


## Candidate Comments ##
