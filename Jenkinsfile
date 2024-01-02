pipeline {
    agent {
        docker {
            image 'node:20.10.0-alpine3.18'
            args '-p 3000:3000'
        }
    }
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