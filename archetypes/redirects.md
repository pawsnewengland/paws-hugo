---
title: "{{ replace .TranslationBaseName "-" " " | humanize }}"
redirect: ""
date: {{ dateFormat "2006-01-02" .Date }}T10:30:00{{ dateFormat "-07:00" .Date }}
draft: false
---

