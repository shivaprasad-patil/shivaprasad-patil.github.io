---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

{% if author.googlescholar %}
You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<div class="pub-list">
{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for post in pubs %}
  {% include publication-item.html post=post %}
{% endfor %}
</div>
