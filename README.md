# CRM

A modular Customer Relationship Management (CRM) application designed for extensibility and ease of deployment. Built primarily with Laravel (Blade/PHP) and Docker, this project provides essential CRM features and services as independent modules.

## Features

- **Modular Architecture**: Services such as authentication, leads, tasks, notifications, files, and users are organized as separate modules for scalability and maintainability.
- **Frontend**: Modern frontend (located in `frontend/crm-app`) with Docker support.
- **Backend**: Laravel-based backend leveraging Blade templates and PHP.
- **Dockerized Deployment**: Includes `docker-compose.yml` and service Dockerfiles for easy setup.
- **Microservices**: Key business logic is split into services:
    - Auth Service
    - User Service
    - Lead Service
    - Task Service
    - Notification Service
    - File Service
    - Nginx (reverse proxy and static assets)

## Project Structure

```
.
├── .env                   # Environment configuration for Laravel
├── docker-compose.yml     # Multi-service Docker orchestration
├── frontend/              # Frontend Dockerfile and app
│   └── crm-app/           # Main frontend application
├── install_laravel.sh     # Script to install Laravel dependencies
├── services/              # Microservices for backend functionality
│   ├── auth-service/
│   ├── file-service/
│   ├── lead-service/
│   ├── nginx/
│   ├── notification-service/
│   ├── task-service/
│   └── user-service/
└── README.md
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Quick Start

1. Clone the repository:
   ```sh
   git clone https://github.com/Renzo-Dev/CRM.git
   cd CRM
   ```

2. Copy and edit the `.env` file for your environment.

3. Build and start all services:
   ```sh
   docker-compose up --build
   ```

4. (Optional) For Laravel backend, you may need to install dependencies:
   ```sh
   ./install_laravel.sh
   ```

5. Access the application via your browser at `http://localhost`.

## Services Overview

- **Auth Service**: Handles authentication and authorization.
- **User Service**: Manages user profiles and roles.
- **Lead Service**: CRM lead management.
- **Task Service**: Assigns and tracks tasks.
- **Notification Service**: Delivers notifications.
- **File Service**: Manages file uploads and storage.
- **Frontend**: User interface for the CRM, built as a separate app.

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

## License

This project is licensed under the MIT License.
