const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.destroy,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnAnyKeyReleased,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Behaviors.Platform.Acts.SetIgnoreInput,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying
	];
};
self.C3_JsPropNameTable = [
	{Tilemap: 0},
	{ScrollTo: 0},
	{DestroyOutsideLayout: 0},
	{Platform: 0},
	{Sprite: 0},
	{Solid: 0},
	{Keyboard: 0},
	{Sine: 0},
	{Slime: 0},
	{Black: 0},
	{Coin: 0},
	{View: 0},
	{Text: 0},
	{Diamond: 0},
	{Emerald: 0},
	{Ruby: 0},
	{Ghost: 0},
	{Chest: 0}
];

self.InstanceType = {
	Tilemap: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Solid: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	Slime: class extends self.ISpriteInstance {},
	Black: class extends self.ITiledBackgroundInstance {},
	Coin: class extends self.ISpriteInstance {},
	View: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Diamond: class extends self.ISpriteInstance {},
	Emerald: class extends self.ISpriteInstance {},
	Ruby: class extends self.ISpriteInstance {},
	Ghost: class extends self.ISpriteInstance {},
	Chest: class extends self.ISpriteInstance {}
}