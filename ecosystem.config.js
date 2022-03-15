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
                'host': 'localhost',
                'port': '22'
            }],
            ssh_options: [
                'StrictHostKeyChecking=no'
            ],
            ref: 'origin/master',
            repo: 'https://github.com/kaissi/pm2-teste.git',
            path: '/workspace',
            'pre-setup': "./pre-setup.sh",
            'post-setup': "./post-setup.sh",
            'pre-deploy-local': "./pre-deploy-local.sh",
            'post-deploy': "./post-deploy.sh"
        }
    }
}
