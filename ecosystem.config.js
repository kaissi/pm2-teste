module.exports = {
    apps: [{
        name: 'Bash',
        script: 'run',
        interpreter: '/bin/bash',
        autorestart: true,
        watch: [
            '/workspace/source'
    	]
    }],

    deploy: {
        docker: {
            user: '${USER}',
            host: [{
                'host': 'localhost'
            }],
            ssh_options: [
                'StrictHostKeyChecking=no'
            ],
            ref: 'master',
            repo: '.',
            path: '/workspace',
            'pre-setup': "./pre-setup.sh",
            'post-setup': "./post-setup.sh",
            'pre-deploy-local': "./pre-deploy-local.sh",
            'post-deploy': "./post-deploy.sh"
        }
    }
}
