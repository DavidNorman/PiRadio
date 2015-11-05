#!/bin/bash

# Web site
pushd web >/dev/null
source ./deploy.sh
popd >/dev/null

# Controller
pushd ./controller >/dev/null
source ./deploy.sh
popd >/dev/null
