## 1. underscores_in_headers on; #header中携带的参数有带下划线的，如：jwt_access_token:xxxx,这个值默认off
## 2. 在 Nginx 配置中，location 代理的路由最后是否有斜线（/）会影响到匹配规则。这个区别在以下两种情况下特别重要：
匹配路径: location /example/：这个配置会匹配以 /example/ 结尾的路径，例如 /example/ 或 /example/subpath/
location /example：这个配置会匹配以 /example 结尾的路径，例如 /example，但不会匹配 /example/subpath/
匹配优先级: 当有多个匹配规则时，Nginx 会根据规则的特定性和顺序来决定哪个 location 配置生效。在一些情况下，结尾斜线的有无可能导致不同的匹配结果。一般来说，Nginx 会优先匹配最精确的规则。
例如, 如果你有以下两个配置：
```
location /example/ {
    # 处理以 /example/ 结尾的请求
}
location /example {
    # 处理以 /example 结尾的请求
}
```
在这种情况下，location /example/ 的配置会更具体，因此会优先匹配以 /example/ 结尾的请求。
总之，结尾斜线的有无可能会影响匹配的精确性和优先级，因此需要根据具体需求来选择是否在 location 配置的路径末尾使用斜线。
