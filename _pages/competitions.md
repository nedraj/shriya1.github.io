---
layout: page
title: Competitions
permalink: /competitions/
nav: true
nav_order: 4
---

{% assign items = site.competitions | sort: "date" | reverse %}
<ul class="content-list">
{% for item in items %}
  <li>
    <strong><a href="{{ item.url | relative_url }}">{{ item.title }}</a></strong>
    — {{ item.date | date: "%b %Y" }}
    {% if item.team %} • {{ item.team }}{% endif %}
    {% if item.awards %} • Awards: {{ item.awards | join: ", " }}{% endif %}
    {% if item.link %} • <a href="{{ item.link }}" target="_blank">link</a>{% endif %}
    <div class="article-body">{{ item.content | markdownify }}</div>
  </li>
{% endfor %}
</ul>
