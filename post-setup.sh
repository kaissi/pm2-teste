#!/bin/bash

hostname \
    && pm2 start ecosystem.config.js --env docker

