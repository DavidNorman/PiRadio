# Web site
pushd web
source ./deploy.sh
popd

# Controller
pushd ./controller
source ./deploy.sh
popd
