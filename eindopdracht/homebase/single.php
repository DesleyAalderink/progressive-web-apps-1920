<?php
	/*
  Single: Blog
	*/

	get_header();

	$postID = get_the_ID();
	$thumbnail = get_field('thumbnail');
?>

<main id="blog-<?php echo $postID ?>" class="blog-single">
	<div class="container">
		<article>
			<div class="post-cycle">
				<div class="back">
					<a href="/#blog"></a>
				</div>

				<div class="cycle">
					<div class="prev">
						<?php previous_post_link('%link', 'Vorige'); ?>
					</div>

					<div class="next">
						<?php next_post_link('%link', 'Volgende'); ?>
					</div>
				</div>
			</div>

			<div class="hero"  style="background-image: url(<?php echo $thumbnail['url'] ?>)"></div>

			<div class="content">
				<h1><?php the_title(); ?></h1>


				<?php
					if ( !empty(get_field( 'inleiding'))) {
						echo "<p class='preface'>".get_field('inleiding')."</p>";
					}
				?>

				<?php
					if (have_rows('content')) {
						while (have_rows('content')) { the_row();
							if (get_row_layout() == 'titel') {
									$t = get_sub_field('titel');
									echo "<h2>".$t."</h2>";

							} elseif (get_row_layout() == 'paragraaf') {
								$p = get_sub_field('paragraaf');
								echo "<p>".$p."</p>";

							} elseif (get_row_layout() == 'afbeelding') {
								$img = get_sub_field('afbeelding');
								echo "<img src='".$img."'>";

							} elseif (get_row_layout() == 'youtube_video') {
								$yv = get_sub_field('youtube_video');
								echo "<div class='youtube-video'>";
								echo "<iframe class='video' src='https://www.youtube.com/embed/".$yv."?rel=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
								echo "</div>";

							} elseif (get_row_layout() == 'vimeo_video') {
								$vv = get_sub_field('vimeo_video');
								echo "<div class='vimeo-video'>";
								echo "<iframe class='video' src='https://player.vimeo.com/video/".$vv."' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
								echo "</div>";

							} elseif (get_row_layout() == 'media_video') {
								$vid = get_sub_field('video');
								echo "<video controls>";
								echo "<source src='".$vid."' type='video/mp4'>";
								echo "</video>";

							}
						}
					}
				?>
			</div>
		</article>

		<?php


			$array = Array(
				'post_type'       =>    'post',
				'post_per_page'   =>    -1,
				'post_status'     =>    'publish',
				'orderby'         =>    'menu_order',
				'order'           =>    'ASC',
				'category__in' => wp_get_post_categories( $post->ID ),
				'post__not_in' => array( $post->ID )
			);

				$query = new WP_Query($array);

				if ( $query->have_posts() ) {
		?>
					<aside class="more-blog">
					<h3>Meer blogposts</h3>
						<ul>
		<?php
					while ( $query->have_posts() ) { $query->the_post();
		?>
							<li>
								<a href="<?php echo the_permalink(); ?>">
									<div class="img" style="background-image: url(<?php echo get_field('thumbnail')['sizes']['functie-thumb']; ?>)"></div>
									<h5><?php the_title(); ?></h5>
								</a>
							</li>
		<?php
					}
		?>
						</ul>
					</aside>
		<?php
				}
				wp_reset_query();
				wp_reset_postdata();
		?>
	</div>
</main>

<?php
get_footer();
