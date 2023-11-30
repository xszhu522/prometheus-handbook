import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as l,a as e,b as n,d as a,e as i}from"./app-aeozbcr_.js";const p={},c=e("h1",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),u={href:"https://heisenbergye.github.io/",target:"_blank",rel:"noopener noreferrer"},d=e("h2",{id:"使用预编译二进制文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用预编译二进制文件","aria-hidden":"true"},"#"),n(" 使用预编译二进制文件")],-1),h={href:"https://prometheus.io/download",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"从源代码构建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从源代码构建","aria-hidden":"true"},"#"),n(" 从源代码构建")],-1),b=e("p",null,[n("要从源代码构建 Prometheus 组件，请查看相应仓库中的 "),e("code",null,"Makefile"),n("。")],-1),_=e("h2",{id:"使用docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用docker","aria-hidden":"true"},"#"),n(" 使用Docker")],-1),k={href:"https://quay.io/repository/prometheus/prometheus",target:"_blank",rel:"noopener noreferrer"},v={href:"https://hub.docker.com/u/prom/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[n("使用 Docker 运行 Prometheus 相当简单，只需要命名 "),e("code",null,"docker run -p 9090:9090 prom/prometheus"),n("，Prometheus 将使用一个简单的配置文件启动并暴露服务到9090端口。")],-1),g={href:"https://docs.docker.com/engine/admin/volumes/volumes/",target:"_blank",rel:"noopener noreferrer"},y=i(`<ul><li>绑定及挂载数据卷</li></ul><p>用以下命令将主机文件系统中的 <code>prometheus.yml</code> 挂载到容器中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token parameter variable">-v</span> /tmp/prometheus.yml:/etc/prometheus/prometheus.yml <span class="token punctuation">\\</span>
       prom/prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用额外的数据卷挂载配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token parameter variable">-v</span> /prometheus-data <span class="token punctuation">\\</span>
       prom/prometheus <span class="token parameter variable">--config.file</span><span class="token operator">=</span>/prometheus-data/prometheus.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>自定义容器镜像</li></ul><p>为了避免挂载主机文件到容器中的操作，可以将配置文件封装入容器镜像中。此方法适用于配置文件基本稳定（变更小）并且在所有环境中都相同的情况。</p><p>创建一个新的路径来存放 Prometheus 配置文件， Dockerfile 如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM prom/prometheus
ADD prometheus.yml /etc/prometheus/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下命令构建新镜像，并运行容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my-prometheus <span class="token builtin class-name">.</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 my-prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更高级的选项是在容器启动时，使用某些动态配置管理工具或者守护程序定期更新配置。</p><h2 id="使用配置管理系统" tabindex="-1"><a class="header-anchor" href="#使用配置管理系统" aria-hidden="true">#</a> 使用配置管理系统</h2><p>如果你更喜欢使用配置管理系统，你可能会对以下几种第三方工具感兴趣：</p><p><strong>Ansible</strong></p>`,15),x={href:"https://github.com/cloudalchemy/ansible-prometheus",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,[e("strong",null,"Chef")],-1),D={href:"https://github.com/rayrod2030/chef-prometheus",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[e("strong",null,"Puppet")],-1),V={href:"https://forge.puppet.com/puppet/prometheus",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,[e("strong",null,"SaltStack")],-1),B={href:"https://github.com/bechtoldt/saltstack-prometheus-formula",target:"_blank",rel:"noopener noreferrer"};function C(E,S){const s=t("ExternalLinkIcon");return o(),l("div",null,[c,e("blockquote",null,[e("p",null,[n("译者："),e("a",u,[n("詹叶"),a(s)])])]),d,e("p",null,[n("我们为绝大部分 Prometheus 组件提供预编译二进制文件。查看"),e("a",h,[n("下载"),a(s)]),n("获取所有可用版本列表。")]),m,b,_,e("p",null,[n("所有可用的 Prometheus 容器镜像可在公有镜像仓库 "),e("a",k,[n("Quay.io"),a(s)]),n(" 或者 "),e("a",v,[n("Docker Hub"),a(s)]),n(" 中获取。")]),f,e("p",null,[n("Prometheus 容器镜像使用卷来存储实际的 metrics 指标。对于生产部署，强烈推荐使用 "),e("a",g,[n("容器数据卷"),a(s)]),n(" 来简化 Prometheus 升级时的数据管理操作。")]),y,e("ul",null,[e("li",null,[e("a",x,[n("Cloud Alchemy/ansible-prometheus"),a(s)])])]),P,e("ul",null,[e("li",null,[e("a",D,[n("rayrod2030/chef-prometheus"),a(s)])])]),N,e("ul",null,[e("li",null,[e("a",V,[n("puppet/prometheus"),a(s)])])]),A,e("ul",null,[e("li",null,[e("a",B,[n("bechtoldt/saltstack-prometheus-formula"),a(s)])])])])}const L=r(p,[["render",C],["__file","installation.html.vue"]]);export{L as default};
