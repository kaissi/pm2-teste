#!/bin/bash

echo "[pre-setup] hostname=$(hostname)"
$PWD
if [ -d /workspace/source ]; then
    rm -rf source
fi

