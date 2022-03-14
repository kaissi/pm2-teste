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
                'StrictHostKeyChecking=no',
                'VisualHostKey=yes'
            ],
            ref: 'origin/master',
            repo: 'https://github.com/kaissi/pm2-teste.git',
            path: '/workspace',
            'pre-setup': ' \
            #echo "[pre-setup] hostname=$(hostname)" \
            ',
            'post-setup': ' \
            #echo "[post-setup] hostname=$(hostname)" \
            ',
            'pre-deploy-local': ' \
            #echo "[pre-deploy-local] hostname=$(hostname)" \
            ',
            'post-deploy': ' \
                echo "[post-deploy] hostname=$(hostname)" \
                    && . ${HOME}/.bashrc \
                    && pm2 reload ecosystem.config.js --env docker \
            '
        }
    }
}
