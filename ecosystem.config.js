module.exports = {
    apps: [{
        name: 'Bash',
        script: 'run',
        interpreter: '/bin/bash',
        autorestart: true,
        watch: [
            '.'
    	]
    }],

    deploy: {
        docker: {
            user: 'linuxserver.io',
            host: [{
                'host': '172.17.0.2',
                'port': '2222'
            }],
            ssh_options: [
                'StrictHostKeyChecking=no'
            ],
            ref: 'origin/master',
            repo: 'https://github.com/kaissi/pm2-teste.git',
            path: '/workspace',
            'pre-setup': " \
                hostname \
            ",
            'post-setup': " \
                hostname \
            ",
            'pre-deploy-local': " \
                hostname \
            ",
            'post-deploy': " \
                hostname \
                    && . ${HOME}/.bashrc \
                    && pm2 reload ecosystem.config.js --env docker \
            "
        }
    }
}
