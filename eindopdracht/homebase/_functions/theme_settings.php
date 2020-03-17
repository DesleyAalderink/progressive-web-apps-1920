<?php

	/*
	 * ADD SETTINGS PAGE
	 */

	add_action('admin_menu', 'theme_settings_page');

	function theme_settings_page ()
	{
		if ( count($_POST) > 0 && isset($_POST['theme_settings']) )
		{
			$options = array (
				'instagram',
				'pinterest',
				'twitter',
				'youtube',
				'facebook',
				'linkedin',
				'email',
				'telefoon',
				'website',
				'straat',
				'plaats',
				'postcode',
				'algemene_voorwaarden',
				'privacy',
				'disclaimer'
			);

			foreach ( $options as $opt )
			{
				if(isset($_POST[$opt])) {
					delete_option( 'theme_'.$opt, $_POST[$opt] );
					add_option( 'theme_'.$opt, $_POST[$opt] );
				}
			}

		}
		$page = add_menu_page(__('Thema opties'), __('Thema opties'), 'edit_themes', basename(__FILE__), 'theme_settings');

	}

function theme_settings()
{?>
<div class="wrap">
	<h2>Thema instellingen</h2>

	<form method="post" action="">

	<fieldset style="border:1px solid #ddd; padding-left:20px;padding-bottom:20px; margin-top:20px;">
	<legend style="margin-left:5px; padding:0 5px;color:#2481C6; text-transform:uppercase;"><strong>Social media links</strong></legend>
	<table class="form-table">
		<tr valign="top">
			<th scope="row"><label for="instagram">Instagram naam</label></th>
			<td>
				<input name="instagram" type="text" id="instagram" value="<?php echo get_option('theme_instagram'); ?>" class="regular-text" />
				<br />
				<em>Instagram naam</em>
			</td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="twitter">Twitter naam </label></th>
			<td>
				<input name="twitter" type="text" id="twitter" value="<?php echo get_option('theme_twitter'); ?>" class="regular-text" />
				<br />
				<em>Twitter naam</em>
			</td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="youtube">Youtube link </label></th>
			<td>
				<input name="youtube" type="text" id="youtube" value="<?php echo get_option('theme_youtube'); ?>" class="regular-text" />
				<br />
				<em>Youtube Link</em>
			</td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="pinterest">Pinterest Url </label></th>
			<td>
				<input name="pinterest" type="text" id="pinterest" value="<?php echo get_option('theme_pinterest'); ?>" class="regular-text" />
				<br />
				<em>Pinterest Link</em>
			</td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="facebook">Facebook Url </label></th>
			<td>
				<input name="facebook" type="text" id="facebook" value="<?php echo get_option('theme_facebook'); ?>" class="regular-text" />
				<br />
				<em>Facebook Link</em>
			</td>
		</tr>
		<tr valign="top">
			<th scope="row"><label for="linkedin">LinkedIn Url </label></th>
			<td>
				<input name="linkedin" type="text" id="linkedin" value="<?php echo get_option('theme_linkedin'); ?>" class="regular-text" />
				<br />
				<em>LinkedIn Link</em>
			</td>
		</tr>
	</table>
	</fieldset>

	<fieldset style="border:1px solid #ddd; padding-left:20px;padding-bottom:20px; margin-top:20px;">
		<legend style="margin-left:5px; padding:0 5px;color:#2481C6; text-transform:uppercase;"><strong>Adres info</strong></legend>
			<table class="form-table">
				<tr valign="top">
					<th scope="row"><label for="email">Email adres </label></th>
					<td>
						<input name="email" type="text" id="email" value="<?php echo get_option('theme_email'); ?>" class="regular-text" />
						<br />
						<em>Email adres</em>
					</td>
				</tr>
				<tr valign="top">
					<th scope="row"><label for="telefoon">Telefoonnummer </label></th>
					<td>
						<input name="telefoon" type="text" id="telefoon" value="<?php echo get_option('theme_telefoon'); ?>" class="regular-text" />
						<br />
						<em>Telefoon nummer zoals weergeven moet worden (020) of (06) ervoor</em>
					</td>
				</tr>
				<tr valign="top">
					<th scope="row"><label for="website">Website url </label></th>
					<td>
						<input name="website" type="text" id="website" value="<?php echo get_option('theme_website'); ?>" class="regular-text" />
						<br />
					</td>
				</tr>
				<tr valign="top">
					<th scope="row"><label for="straat">Straatnaam + nummer </label></th>
					<td>
						<input name="straat" type="text" id="straat" value="<?php echo get_option('theme_straat'); ?>" class="regular-text" />
						<br />
						<em>Straatnaam + nummer</em>
					</td>
				</tr>
				<tr valign="top">
					<th scope="row"><label for="plaats">Plaats </label></th>
					<td>
						<input name="plaats" type="text" id="plaats" value="<?php echo get_option('theme_plaats'); ?>" class="regular-text" />
						<br />
						<em>Plaats</em>
					</td>
				</tr>
				<tr valign="top">
					<th scope="row"><label for="postcode">Postcode </label></th>
					<td>
						<input name="postcode" type="text" id="postcode" value="<?php echo get_option('theme_postcode'); ?>" class="regular-text" />
						<br />
						<em>Postcode</em>
					</td>
				</tr>
			</table>
		</legend>
	</fieldset>

	<fieldset style="border:1px solid #ddd; padding-left:20px;padding-bottom:20px; margin-top:20px;">
		<legend style="margin-left:5px; padding:0 5px;color:#2481C6; text-transform:uppercase;"><strong>Algemene voorwaarden & Privacy</strong></legend>
			<table class="form-table">
				<tr valign="top">
					<th scope="row"><label for="algemene_voorwaarden">Algemene voorwaarden </label></th>
					<td>
						<input name="algemene_voorwaarden" type="text" id="algemene_voorwaarden" value="<?php echo get_option('theme_algemene_voorwaarden'); ?>" class="regular-text" />
						<br />
						<em>Plak hier de url van de algemene voorwaarden PDF. (Uploaden in de Mediabibliotheek of extern)</em>
					</td>
				</tr>
				<tr valign="top">
					<th scope="row"><label for="privacy">Privacy verklaring </label></th>
					<td>
						<input name="privacy" type="text" id="privacy" value="<?php echo get_option('theme_privacy'); ?>" class="regular-text" />
						<br />
						<em>Plak hier de url van de privacy PDF. (Uploaden in de Mediabibliotheek of extern)</em>
					</td>
				</tr>
				<tr valign="top">
					<th scope="row"><label for="disclaimer">Disclaimer verklaring </label></th>
					<td>
						<input name="disclaimer" type="text" id="disclaimer" value="<?php echo get_option('theme_disclaimer'); ?>" class="regular-text" />
						<br />
						<em>Plak hier de url van de disclaimer PDF. (Uploaden in de Mediabibliotheek of extern)</em>
					</td>
				</tr>
			</table>
		</legend>
	</fieldset>

	<p class="submit">
		<input type="submit" name="Submit" class="button-primary" value="Save Changes" />
		<input type="hidden" name="theme_settings" value="save" style="display:none;" />
	</p>
</form>
</div>
<?php }
?>
