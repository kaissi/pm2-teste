#!/bin/bash

echo "[post-deploy] hostname=$(hostname)" \
    && . ${HOME}/.bashrc \
    && pm2 reload ecosystem.config.js --env docker

