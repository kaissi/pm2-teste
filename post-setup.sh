#!/bin/bash

echo "[post-setup] hostname=$(hostname)" \
    && pm2 start ecosystem.config.js --env docker

