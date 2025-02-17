pipeline {
    agent any
    environment {
        DISPLAY = ':99' // Para entornos sin GUI
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/santiespindd/TestingWorkshop.git'  // Reemplaza con tu repo
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}
