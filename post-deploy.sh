#!/bin/bash

hostname \
	&& . ${HOME}/.bashrc \
    && pm2 reload ecosystem.config.js --env docker

