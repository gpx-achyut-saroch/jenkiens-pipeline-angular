pipeline {
    agent any

    tools { nodejs 'node' }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
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
