@if (count($projects))
	<h1 class="title is-3">My Projects</h1>

	<ul>
		@foreach ($projects as $project)
			<li>
				<a href="#">{{ $project->name }}</a>
				<div><small>{{ $project->description }}</small></div>
			</li>
		@endforeach
	</ul>

	<hr>
@endif
