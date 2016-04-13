# aciTree_AntBuild
An Ant Build that creates a JSON file for use with the [aciTree jQuery plugin](http://plugins.jquery.com/aciTree/). The JSON file maps the tree structure of a user-defined root directory, including all subdirectories and PDF files; see a [demonstration](http://asmith26.github.io/aciTree_AntBuild/demo).

![Example of the mapping](/screenshots/Map.png?raw=true "Example of such a mapping")
```
[
  {"id":"FOLDER", "label":"No Content", "inode":true, "open":false, "icon":"folder"},
  {"id":"FOLDER", "label":"Some Content", "inode":true, "open":true, "icon":"folder", "branch": [
    {"id":"content/Some_Content/PDF1.pdf", "label":"PDF1", "inode":false, "icon":"file"},
    {"id":"content/Some_Content/PDF2.pdf", "label":"PDF2", "inode":false, "icon":"file"}
  ]
  }
]
```

###Future enhancements
- Create more general functionality for defining what files should be included/excluded by the build.
- Improve the efficency by building directories at the same level in parallel.
