# 微云 docker 运行脚本

export PATH=$NODEJS_BIN_LATEST:$PATH

echo "node: $(node -v)"
echo "npm: v$(npm -v)"

npm run start

# npm install
# npm run dev
