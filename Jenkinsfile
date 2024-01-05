pipeline {
    agent any

    tools { nodejs 'NodeJSv14' }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run ng test --no-watch --no-progress --browsers=ChromeHeadless'
            }
        }
        stage('Sonar') {
            steps {
                sh 'npm run sonar'
            }
        }
    }
}
