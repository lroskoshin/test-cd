pipeline {
  agent {
    node {
      label 'Begin'
    }

  }
  stages {
    stage('Build') {
      agent {
        node {
          label 'Nodejs'
        }

      }
      steps {
        sh 'npm i && npm run build admin'
      }
    }

  }
}