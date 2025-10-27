---
layout: page
title: Awards
permalink: /awards/
nav: true
nav_order: 2
---

{% assign items = site.awards | sort: "date" | reverse %}
<ul class="content-list">
{% for item in items %}
  <li>
    <strong><a href="{{ item.url | relative_url }}">{{ item.title }}</a></strong>
    — {{ item.date | date: "%b %Y" }}
    {% if item.org %} • {{ item.org }}{% endif %}
    {% if item.link %} • <a href="{{ item.link }}" target="_blank">link</a>{% endif %}
    <div class="article-body">{{ item.content | markdownify }}</div>
  </li>
{% endfor %}
</ul>
