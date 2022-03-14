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
            'pre-setup': ' \
                echo "$(hostname)" \
            ',
            'post-setup': ' \
                echo "$(hostname)" \
            ',
            'pre-deploy-local': ' \
                echo $(hostname) \
            ',
            'post-deploy': ' \
                echo '$(hostname)' \
                    && . ${HOME}/.bashrc \
                    && pm2 reload ecosystem.config.js --env docker \
            '
        }
    }
}
