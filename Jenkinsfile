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
                sh 'jest --no-watch --runInBand --coverage'
            }
        }
        stage('Sonar') {
            steps {
                sh 'npm run sonar'
            }
        }
    }
}
