#!/bin/bash

hostname \
    && eval "$(ssh-agent -s)" \
    && ssh-add

