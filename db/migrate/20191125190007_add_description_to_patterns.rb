class AddDescriptionToPatterns < ActiveRecord::Migration[5.2]
  def change
    add_column :patterns, :description, :string
  end
end
