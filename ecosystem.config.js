module.exports = {
    "apps": [
        {
            "name": "Bash",
            "script": "run",
            "interpreter": "/bin/bash",
            "instances": -1,
            "autorestart": true,
            "watch": true,
            "max_memory_restart": "100M"
        }
    ],

    "deploy": {
        "docker": {
            "key": "~/.ssh/id_rsa",
            "user": "linuxserver.io",
            "host": [
                {
                    "host": "172.17.0.2",
                    "port": "2222"
                }
            ],
            "ref": "origin/master",
            "repo": "https://github.com/kaissi/pm2-teste.git",
            "path": "/workspace",
            "post-deploy": "\
                pm2 reload ecosystem.config.js --env docker \
            "
        }
    }
}
