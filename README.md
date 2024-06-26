# Evan-Dangol-Backend-Task

## Prerequisites

- Docker: Install Docker from [here](https://docs.docker.com/get-docker/).
- Docker Compose: Install Docker Compose from [here](https://docs.docker.com/compose/install/).

## Setting Up the Application

### 1. Clone the Repository

Clone the repository to your local machine:
copy code below and paste in your terminal and hit ENTER.
```bash

git clone https://github.com/edangolgithub/Evan-Dangol-Backend-Task.git
cd Evan-Dangol-Backend-Task
docker-compose up

if there is issue with dbvol folder run=> sudo chown -R $USER $PWD/dbvol

```
### Access the Application

* **Application**: [http://localhost:8009](http://localhost:8009)
* **Application**: [http://localhost:8009](http://localhost:8009)
* **phpMyAdmin**: [http://localhost:8080](http://localhost:8080) (use `root` and `secrET123#@` as username and password)



* Users can create, read, update, and delete tasks.
* Tasks are displayed in a paginated list on the frontend.

