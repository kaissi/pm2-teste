#!/bin/bash

echo "[pre-setup] hostname=$(hostname)"
$PWD
if [ -d source ]; then
    rm -rf source
fi

