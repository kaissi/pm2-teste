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
                printf '[pre-setup] hostname=%s\n' $(hostname) \
            ",
            'post-setup': " \
                printf '[post-setup] hostname=%s\n' $(hostname) \
            ",
            'pre-deploy-local': " \
                printf '[pre-deploy-local] hostname=%s\n' $(hostname) \
            ",
            'post-deploy': " \
                printf '[post-deploy] hostname=%s\n' $(hostname) \
                    && . ${HOME}/.bashrc \
                    && pm2 reload ecosystem.config.js --env docker \
            "
        }
    }
}
