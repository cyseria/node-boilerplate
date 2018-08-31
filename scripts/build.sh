# icode 代码提交

export PATH=$NODEJS_BIN_LATEST:$PATH

echo "node: $(node -v)"
echo "npm: v$(npm -v)"
echo $PWD

npm install --production
rm -rf output/output.zip
mkdir -p output && zip -r output/output.zip .