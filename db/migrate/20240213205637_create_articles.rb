class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string :author
      t.string :title
      t.text :description
      t.string :url
      t.string :url_to_image
      t.string :published_at
      t.text :content

      t.timestamps
    end
  end
end
