pipeline {
    agent any

    tools { nodejs 'NodeJSv14' }

    stages {
        stage('Build') {
            steps {
                sh 'npm install -g @angular/cli@14'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test --no-watch --no-progress --browsers=ChromeHeadless'
            }
        }
        stage('Sonar') {
            steps {
                sh 'npm run sonar'
            }
        }
    }
}
