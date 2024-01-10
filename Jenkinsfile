pipeline {
    agent any

    tools { nodejs 'NodeJSv14' }

    stages {
        stage('Build') {
            steps {
                sh 'npm install  @angular/cli@14'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Sonar') {
            steps {
                sh 'npm run sonar'
            }
        }
    }
}
