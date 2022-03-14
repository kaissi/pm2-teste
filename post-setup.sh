#!/bin/bash

echo "[post-setup] hostname=$(hostname)" \
    && . ${HOME}/.bashrc \
    && pm2 start ecosystem.config.js --env docker

