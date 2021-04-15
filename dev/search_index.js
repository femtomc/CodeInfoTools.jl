var documenterSearchIndex = {"docs":
[{"location":"#API-Documentation","page":"API Documentation","title":"API Documentation","text":"","category":"section"},{"location":"","page":"API Documentation","title":"API Documentation","text":"Below is the API documentation for CodeInfoTools.jl","category":"page"},{"location":"","page":"API Documentation","title":"API Documentation","text":"CurrentModule = CodeInfoTools","category":"page"},{"location":"","page":"API Documentation","title":"API Documentation","text":"code_info\nPipe\nrenumber\nrenumber!\nfinish","category":"page"},{"location":"#CodeInfoTools.code_info","page":"API Documentation","title":"CodeInfoTools.code_info","text":"code_info(f, tt; generate = true, debuginfo = :default)\n\nReturn lowered code for function f with tuple type tt. Equivalent to InteractiveUtils.@code_lowered – but a function call and requires a tuple type tt as input.\n\n\n\n\n\n","category":"function"},{"location":"#CodeInfoTools.Pipe","page":"API Documentation","title":"CodeInfoTools.Pipe","text":"Pipe(ir)\n\nA wrapper around a Canvas object. Call finish when done to produce a new CodeInfo instance.\n\n\n\n\n\n","category":"type"},{"location":"#CodeInfoTools.finish","page":"API Documentation","title":"CodeInfoTools.finish","text":"finish(p::Pipe)\n\nCreate a new CodeInfo instance from a Pipe. Renumbers the wrapped Canvas in-place – then copies information from the original CodeInfo instance and inserts modifications from the wrapped Canvas.\n\n\n\n\n\n","category":"function"}]
}
