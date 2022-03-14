#!/bin/bash

echo "[pre-setup] hostname=$(hostname)"

if [ -d source ]; then
    rm -rf source
fi

